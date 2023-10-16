import axios from "axios";

const url: string = "https://challenge-phone-contact.onrender.com/api";

export const createContact = async (data: any) => {
  try {
    const config: {} = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${url}/create-contact`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const getContact = async () => {
  try {
    return await axios.get(`https://challenge-phone-contact.onrender.com/api/get-contact`).then((res: any) => {
      return res.data.data;
      // console.log("res",res.data.data)
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async ( contactID: string) => {
  try {
    return await axios
      .delete(`${url}/${contactID}/delete-contact`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const searchCat = async (data: any) => {
  try {
    return await axios
      .post(`${url}/search-categories`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
