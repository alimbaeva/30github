import {
  useState,
  useEffect,
  ChangeEvent,
  MouseEvent,
  FormEvent,
  FC,
  useCallback,
} from 'react';
import { Breed } from '../types/types';
import { ERRORLOADING } from '../veriables';
import './styles/topControls.scss';
import { useSearch } from './context/useSearch';
import { fetchCats } from '../customhooks/useFetchCats';

const TopControls: FC = () => {
  const {
    searchValue,
    breeds,
    idValue,
    searchValueKey,
    setCats,
    setSearchValue,
    setIdValue,
    saveToLocalStorage,
    setBreedsValue,
    setSearchValueKey,
  } = useSearch();
  const [searchValueState, setSearchValueState] = useState({
    searchValue,
    searchValueKey,
    idValue,
  });
  const [inputOptions, setInputOptions] = useState<Breed[]>([]);
  const [showListBreeds, setShowListBreeds] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (error) throw new Error('Имитация ошибки при клике.');

  const fetchBreeds = useCallback(async () => {
    await fetchCats()
      .then((res) => {
        const { data, breeds } = res;
        setCats(data);
        setBreedsValue(breeds);
      })
      .catch((error) => {
        console.error(error);
        setError('Ошибка загрузки списка пород');
        throw new Error(`${ERRORLOADING}`);
      });
  }, [setBreedsValue, setCats]);

  const handleChangeKey = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    if (showListBreeds) setShowListBreeds(false);
    setSearchValueState({
      searchValueKey: value,
      searchValue: '',
      idValue: '',
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchValueState({
      idValue: '',
      searchValue: value,
      searchValueKey: '',
    });
    setShowListBreeds(true);

    const filteredBreeds = breeds.filter((el) =>
      el.name.toLowerCase().includes(value)
    );
    if (!filteredBreeds || !filteredBreeds.length) {
      setSearchValueState({
        searchValue: value,
        idValue: '',
        searchValueKey: '',
      });

      setInputOptions([]);
    }

    if (filteredBreeds.length) setInputOptions(filteredBreeds);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!searchValueState.searchValue && !searchValueState.searchValueKey) {
      setIdValue('');
      setSearchValue('');
      setSearchValueKey('');
      saveToLocalStorage({
        searchValue: '',
        searchValueKey: '',
        idValue: '',
      });

      return;
    }

    setSearchValue(searchValueState.searchValue);
    setSearchValueKey(searchValueState.searchValueKey);
    setIdValue('');
    saveToLocalStorage({
      searchValue: searchValueState.searchValue,
      searchValueKey: searchValueState.searchValueKey,
      idValue: '',
    });
  };

  const handleBreedItem = (event: MouseEvent<HTMLLIElement>) => {
    const eventName = event.currentTarget.textContent as string;
    setSearchValueState({
      searchValue: eventName,
      idValue: '',
      searchValueKey: '',
    });
    setShowListBreeds(false);
  };

  useEffect(() => {
    if (!searchValue || !searchValue.length) {
      setInputOptions(breeds);
      setShowListBreeds(false);
    }
  }, [breeds, searchValue]);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <div className="controls-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="inputs-wrapper">
          <div className="input-wrapper">
            <p>Поиск.</p>
            <input
              type="text"
              value={searchValueState?.searchValueKey || ''}
              onChange={handleChangeKey}
              placeholder="Введите текст для поиска"
            />
          </div>
          <div className="input-wrapper">
            <p>Поиск с предложениями помогает быстро найти результат.</p>
            <input
              type="text"
              value={searchValueState.searchValue || ''}
              onChange={handleChange}
              placeholder="Введите текст для поиска"
            />
            {showListBreeds && (
              <>
                {inputOptions && inputOptions.length ? (
                  <ul className="wrapper-breed">
                    {inputOptions.map((el) => (
                      <li
                        key={el.id}
                        data-id={el.id}
                        onClick={handleBreedItem}
                        className="breed-item"
                      >
                        {el.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No breeds found</p>
                )}
              </>
            )}
          </div>
        </div>
        <button>Search</button>
      </form>
      <button
        onClick={() => setError(ERRORLOADING)}
        type="button"
        className="error-btn"
      >
        Error Button
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TopControls;
