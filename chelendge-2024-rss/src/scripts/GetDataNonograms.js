class GetDataNonograms extends Timer {
  constructor() {
    super();
    this.data = {};
    this.namesArray = [];
  }

  async fetchData(url) {
    // получаем данные из url адреса
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      const bodyText = await response.text();

      const data = JSON.parse(bodyText);
      this.data = data;
      this.selectData();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  selectData() {
    // получаем из this.data все ключи
    const keys = Object.keys(this.data);

    let allKeys = [];

    keys.forEach((key) => {
      if (this.data[key] && typeof this.data[key] === 'object') {
        allKeys = [
          ...allKeys,
          ...Object.keys(this.data[key]).reduce((arr, el) => {
            arr.push(`${el}__${key}`);
            return arr;
          }, []),
        ];
        this.namesArray = [...allKeys];
      } else {
        console.warn(
          `Data for key '${key}' is not an object or is undefined/null.`
        );
      }
    });
  }
}

const getData = new GetDataNonograms();

getData.fetchData('data/data.json');
