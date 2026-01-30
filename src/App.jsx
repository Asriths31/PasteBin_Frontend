import { useState } from 'react'
import './App.css'
import { axiosInstance } from './comp/axiosInstance';
import { use } from 'react';

function App() {

  const[content,setContent]=useState("");
  const[ttlSeconds,setTtlSeconds]=useState(null)
  const[maxViews,setMaxViews]=useState(null)
  const[isLoading,setIsLoading]=useState(false)
  const[data,setData]=useState(null)
  const[err,setErr]=useState(null)
  const[isTextCopied,setIsTextCopied]=useState(false)
  function createPaste(){
    console.log("in functionnn")
    setIsLoading(true)
    setErr(null)
    setData(null)
    setIsTextCopied(false)
    if(content.trim().length===0){
      setErr("Paste Cannot be empty , Please Enter any text ");
      setIsLoading(false)
      return;
    }
    axiosInstance.post("/api/pastes",{
      content,
      max_views:Number(maxViews),
      ttl_seconds:Number(ttlSeconds)
    })
    .then(res=>{
      console.log(res.data);
      setData(res.data);
      setIsLoading(false)
    })
    .catch(err=>{
      console.log("errror",err.response.data.message)
      setErr(err.response.data.message)
      setIsLoading(false)
    })
  }

 async function copyUrl(){
      try{
        await navigator.clipboard.writeText(data.url)
        setIsTextCopied(true)
      }
      catch(err){
        console.log("Copy Failed",err.message)
      }
  }

  return (
    <div className='main-div'>
      <h1>Paste Creator</h1>
      <div className='text-div'>
        <textarea 
        className='text-area'
        value={content}
        placeholder='Please Enter Your Text Here'
        onChange={e=>{
          setErr(null)
          setData(null)
          setContent(e.target.value)
        }}
        />
        <div className='sidebar'>
            <div className='input-values'>
                <label>
                  Expiry of paste (in seconds)
                </label>
                <input
                placeholder='Ex:3600'
                value={ttlSeconds??""}
                type='number'
                onChange={(e)=>setTtlSeconds(e.target.value)}
                ></input>
            </div>
            <div className='input-values'>
                <label>
                  Max view Limit
                </label>
                <input
                placeholder='Ex:3'
                value={maxViews??""}
                type='number'
                onChange={(e)=>setMaxViews(e.target.value)}
                ></input>
            </div>
            <button onClick={createPaste}>{isLoading?"Creating...":"Create Paste"}</button>
            {data&&(
              <div className='generated-url'>
                <h3>Generated Url:</h3>
                <p>{data.url}</p>
                <button onClick={copyUrl}>{isTextCopied?"Url Copied":"Copy Url"}</button>
                <a href={data.url} target='blank'><button>Open Paste</button></a>
              </div>
            )}
            {
              err&&(
                <p className='error-msg'>{err}</p>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default App
