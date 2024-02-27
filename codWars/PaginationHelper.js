// В этом упражнении вы укрепите свои навыки работы со страницами. Вы завершите класс PaginationHelper, который является служебным классом, полезным для запроса информации о подкачке, связанной с массивом.

// Класс предназначен для приема массива значений и целого числа, указывающего, сколько элементов будет разрешено на каждой странице. Типы значений, содержащиеся в коллекции / массиве, не имеют значения.

// Ниже приведены несколько примеров использования этого класса:


class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  
  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage); // округляем в вверх, что бы отобразить все стр (отстатки)
  }

  pageItemCount(pageIndex) {
    const totalPages = this.pageCount();  // сохраняем страницы
    
    if (pageIndex < 0 || pageIndex >= totalPages) { // если стр меньще 0 или больше общего количество 
      return -1;
    }  
    if (pageIndex === totalPages - 1) {  
      // this.collection.length делим this.itemsPerPage и узнаем остаток если есть возвращаем ее если null возвращаем this.itemsPerPage
      return this.collection.length % this.itemsPerPage || this.itemsPerPage;  
    }  
    return this.itemsPerPage;
  }
  
  pageIndex(itemIndex) {
    // 
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    }  
    // itemIndex делим на количество стр и до целого на вверх и так узнаем в каком стр находиться
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1