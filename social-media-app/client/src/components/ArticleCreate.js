import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ArticleCreate() {

  const navigate = useNavigate();
  const [files, setFiles] = useState({});
  const [text, setText] = useState("");

  function handleSubmit(e) {}

  console.log(files);

  const fileList = Object.keys(files).map(key => (
    <li key={key}>{files[key].name}</li>  
  ))

  return (
    <form onSubmit={handleSubmit} className="px-2">
      <div className="mb-2">
        <label className="block">Photos</label>
        <input 
          type="file" 
          name="images"
          onChange={(e) => setFiles(e.target.files)} 
          multiple={true}   // 여러개의 파일을 담을 수 있음
          accept="image/*"  // /* 이미지 파일로 된 모든 파일을 담을 수 있음
        />
        <ul className="bg-gray-100">
          {fileList}
        </ul>
      </div>

      <div className="mb-2">
        <label htmlFor="">Description</label>
        <textarea 
          rows="3"
          name="description" 
          className="block w-full px-2 py-1 border"
          defaultValue={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>

      <div>
        <button
          type="submit"
          className="px-2 border border-black disabled:opacity-[0.2]"
          disabled={fileList.length<1}
        >
          Submit
        </button>
      </div>

    </form>
  )
}