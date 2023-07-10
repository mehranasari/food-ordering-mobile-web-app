/* eslint-disable no-unused-expressions */
class RecordController {
  add(list, item) {
    let newList = [...list];
    newList.unshift(item);
    return newList;
  }
  update(list, item) {
    let newList = [...list];
    let record = newList.findIndex((each) => each._id === item._id);
    newList[record] = item;
    return newList;
  }
  updateSingleProperty(list, item, property) {
    let newList = [...list];
    newList = newList.map((each) => {
      return {
        ...each,
        [property]: each._id === item._id ? item[property] : !item[property],
      };
    });
    return newList;
  }
  search(list, searchConfig) {
    let newList = [];
    if (searchConfig && searchConfig.length > 0) {
      let searchResult = [];
      searchConfig?.map((each) => {
        list?.map((_) => {
          if (typeof each.property === "string") {
            if (_[each.property].includes(each.query)) {
              searchResult.push(_);
            }
          } else {
            let value = _;
            each.property.forEach((q) => {
              value = value[q];
            });
            if (value.includes(each.query)) {
              searchResult.push(_);
            }
          }
          return;
        });
        return;
      });
      newList = [...newList, ...searchResult];
    }
    return newList;
  }
  delete(list, item) {
    let newList = list.filter((each) => each?._id !== item?._id);
    return newList;
  }
}
export default new RecordController();
