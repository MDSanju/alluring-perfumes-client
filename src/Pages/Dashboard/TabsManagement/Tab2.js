import React from "react";
import { useForm } from "react-hook-form";
import { TabNameInputField } from "../../styles/Random.styles";

const Tab2 = ({ tab2 }) => {
  console.log(tab2);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const proceed = window.confirm("Please Confirm!");
    if (proceed) {
      fetch(`https://alluring-perfumes-server.onrender.com/tab2/${tab2._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount) {
            alert("Tab-2 details added successfully!");
            reset();
          }
        });
    }
  };
  return (
    <div>
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TabNameInputField>
              <input
                type="text"
                placeholder="Tab two name"
                required
                {...register("tabName2")}
              />

              <button type="submit">Update</button>
            </TabNameInputField>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tab2;
