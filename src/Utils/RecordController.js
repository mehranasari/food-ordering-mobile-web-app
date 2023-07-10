class RecordController {
    add(list, item) {
      let newList = list ? [...list] : [];
      newList.unshift(item);
      return newList;
    }
    update(list, item) {
      let newList = list ? [...list] : [];
      let record = newList.findIndex((each) => each._id === item._id);
      newList[record] = item;
      return newList;
    }
    updateSingleProperty(list, item, property) {
      let newList = list ? [...list] : [];
      newList = newList.map((each) => {
        return {
          ...each,
          [property]: each._id === item._id ? item[property] : !item[property],
        };
      });
      return newList;
    }
    delete(list, item) {
      let newList = list.filter((each) => each?._id !== item?._id);
      return newList;
    }
  }
  export default new RecordController();
  