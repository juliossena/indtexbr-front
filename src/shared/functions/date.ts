
export const dateTimeStampToString = (date: Date) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString();
  const dayF = (day.length === 1) ? `0${day}` : day;
  const month = (newDate.getMonth() + 1).toString();
  const monthF = (month.length === 1) ? `0${month}` : month;
  const yearF = newDate.getFullYear();

  const hours = `0${newDate.getHours()}`;
  const minutes = `0${newDate.getMinutes()}`;

  return `${dayF}/${monthF}/${yearF} ${hours.substr(-2)}:${minutes.substr(-2)}`;
};

export function dateTimeStringToDate(dateTime: string) {
    const dateTimeSplit = dateTime.split(' ');
    const dateSplit = dateTimeSplit[0].split('/');
    if (dateSplit.length < 2) {
      return '';
    }
    const day = dateSplit[0];
    const month = dateSplit[1];
    const year = dateSplit[2];

    return new Date(`${year}-${month}-${day} ${dateTimeSplit[1]}`);
  }

export const dateTimeStampToDateMaterialUi = (date: Date) => {
  if (!date) {
    return undefined;
  }
  return date.toString().substring(0, 16);
};

export const dateTimeStringToDateMaterialUi = (date: string) => {
  if (!date) {
    return undefined;
  }
  const dateTimeSplit = date.split(' ');
  const dateSplit = dateTimeSplit[0].split('/');
  if (dateSplit.length < 2) {
    return '';
  }
  const day = dateSplit[0];
  const month = dateSplit[1];
  const year = dateSplit[2];

  return `${year}-${month}-${day}T${dateTimeSplit[1]}`;
};
