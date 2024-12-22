import { dataPerson, DataUsers, IDataPerson, IDataUsers } from "./data.js";

const FuncActive = (data: IDataPerson[], status: boolean) => {
  return data.filter((personActive) => personActive.isActive === status);
};

const FuncSort = (data: IDataPerson[]) => {
  return data.sort((a, b) => a.age - b.age);
};

const FuncMap = (data: IDataPerson[]) => {
  return data.map((person) => {
    return {
      nama: person.name,
      kota: person.city,
    };
  });
};

const FuncSum = (data: IDataPerson[]) => {
  if (data.length === 0) return 0;
  const result = data.reduce((acc, call) => (acc += call.age), 0);

  return result / data.length;
};

const FuncSearchById = (data: IDataPerson[], id: number) => {
  return data.find((person) => person.id === id);
};

// soal 2
const FuncGetInactiveUsers = (data: IDataPerson[]) => {
  return data.filter((person) => person.isActive === false);
};

const FuncSortByName = (data: IDataPerson[]) => {
  return data.sort((a, b) => a.name.localeCompare(b.name));
};

const FuncGetTotalAge = (data: IDataPerson[]) => {
  return data.reduce((acc, call) => (acc += call.age), 0);
};

const FuncGetNamesAndCities = (data: IDataPerson[]) => {
  return data.map((person) => {
    return {
      nama: person.name,
      kota: person.city,
    };
  });
};

const FuncAreAllActive = (data: IDataPerson[]) => {
  return data.every((person) => person.isActive === true);
};

const FuncSearchByName = (data: IDataPerson[], name: string) => {
  return data.find(
    (person) =>
      person.name.toLowerCase().replace(/\s+/g, "") === name.toLowerCase()
  );
};

const FuncDeleteUserById = (data: IDataPerson[], id: number) => {
  return data.filter((person) => person.id !== id);
};

// console.log({check: FuncActive(dataPerson, false)})
// console.log({check: FuncSort(dataPerson)})
// console.log({check: FuncMap(dataPerson)})
// console.log({check: FuncSum(dataPerson)})
// console.log({check: FuncSearchById(dataPerson, 1)})

// console.log({ check: FuncSortByName(dataPerson) });
// console.log({ check: FuncGetTotalAge(dataPerson) });
// console.log({ check: FuncGetNamesAndCities(dataPerson) });
// console.log({ check: FuncAreAllActive(dataPerson) });
// console.log({ check: FuncSearchByName(dataPerson, "annabrown") });
// console.log({ check: FuncDeleteUserById(dataPerson, 1) });

