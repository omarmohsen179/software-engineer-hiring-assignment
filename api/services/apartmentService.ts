import Apartment from "../models/Apartment";

export async function listApartments() {
  return Apartment.findAll();
}

export async function getApartmentById(id: number) {
  return Apartment.findByPk(id);
}

export async function addApartment(apartmentData: any) {
  // apartmentData should be an object containing apartment details
  return Apartment.create(apartmentData);
}
export async function updateApartment(apartmentData: any) {
  await Apartment.update(apartmentData, {
    where: { id: apartmentData.id },
  });
  return apartmentData;
}

export async function deleteApartment(id: number) {
  return Apartment.destroy({ where: { id } });
}
