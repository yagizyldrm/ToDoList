export const convertRawData = rawData => {
    if (rawData?.length === 0) {
        return [];
    }

    let convertedList = [];
    let item;
    for (let itemKey in rawData) {
        item = rawData[itemKey];
        item.key = itemKey;
        convertedList.push(item);
    }

    return convertedList;
}