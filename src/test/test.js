import { useEffect, useState } from "react";
import axios from "axios";
import { baseAPI } from "../utils/api.constants";
import { TestPage } from "./style";
import { toast } from "react-toastify";

function Test() {
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const getAllTodo = async () => {
    try {
      const { data } = await axios.get(baseAPI + "/todo/get-all", {
        params: { search },
      });

      if (data.success) {
        setTodo(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addTodo = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(baseAPI + "/todo/add", { title, desc });

    if (data.success) {
      toast.success("Successfull added!");
      getAllTodo();
      setDesc("");
      setTitle("");
    }
  };
  const handleChangeInput = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <TestPage>
      <div>
        <h1>Add</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChangeInput}
            placeholder="title"
          />
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={handleChangeInput}
            placeholder="desc"
          />
          <input type="submit" />
        </form>
      </div>
      <h1>Get Data</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getAllTodo();
          }}
        >
          Search
        </button>
      </div>
      {todo.map((item) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </TestPage>
  );
}

export default Test;
