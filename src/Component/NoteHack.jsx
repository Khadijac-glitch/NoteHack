import React, { useState } from 'react'
import { COLORS} from './Cont';
import { MdModeEditOutline } from "react-icons/md";
export default function NoteHack() {
    const [theme,setTheme]=useState({
        backgroundColor:COLORS.gradientOne.color,
        backgroundImage:COLORS.gradientOne.image
    })
     const[noteInput,setNoteInput ]=useState("")
     const [notes,setNotes]=useState([])
    //  const [isUpdate,setIsUpdate]=useState(false)   
     const [selectedNoteId,setSelectedNoteId]=useState(null)
     const AddNote = (e)=>{
        e.preventDefault()
        let newNote ={ id: Math.floor(Math.random()*1000),title:noteInput,date:Date.now()}
        setNotes([...notes,newNote])
        setNoteInput("")
     }
     const UpdateNote = (e)=> {
        e.preventDefault()
        const notesCopy= [...notes]
        const note = notes.find(note => note.id ==selectedNoteId)
        const noteIndex = notes.findIndex(note => note.id === selectedNoteId)
        let updatedNote = { ...note, title: noteInput }
        notesCopy[noteIndex] = updatedNote
        setNotes (notesCopy)
        setNoteInput("")
     } 
  return (

    <div style={{...theme, height:"100dvh"}}>
        <div className="container py-3">
            <header className='bg-white d-flex justify-content-between align-items-center rounded p-2'>
            <h1 className='fs-5 fw-normal'>HackNote</h1>  
            <div className='d-flex gap-2'>
                <span onClick={()=>{
                    setTheme({
                      backgroundColor:COLORS.gradientOne.color,
                      backgroundImage:COLORS.gradientOne.image
                    })
                }}style={{
                    cursor:'pointer',
                    display:"inline-block",
                    width:25,
                    height:25,
                    borderRadius:"100%",
                    backgroundColor:COLORS.gradientOne.color,
                    backgroundImage:COLORS.gradientOne.image
                }}></span>
                <span onClick={()=>{
                    setTheme({
                      backgroundColor:COLORS.gradientTwo.color,
                       backgroundImage:COLORS.gradientTwo.image
                    })
                }}
                 style={{
                    cursor:'pointer',
                    display:"inline-block",
                    width:25,
                    height:25,
                    borderRadius:"100%",
                    backgroundColor:COLORS.gradientTwo.color,
                    backgroundImage:COLORS.gradientTwo.image
                }}></span>
                 <span onClick={()=>{
                    setTheme({
                       backgroundColor:COLORS.gradientThree.color,
                       backgroundImage:COLORS.gradientThree.image
                    })
                    console.log('click');

                }}style={{
                    cursor:'pointer',
                    display:"inline-block",
                    width:25,
                    height:25,
                    borderRadius:"100%",
                    backgroundColor:COLORS.gradientThree.color,
                    backgroundImage:COLORS.gradientThree.image
                }}></span>
               
                <span onClick={()=>{
                    setTheme({
                        backgroundColor:COLORS.gradientFour.color,
                        backgroundImage:COLORS.gradientFour.image
                    })
                }} 
                style={{
                    cursor:'pointer',
                    display:"inline-block",
                    width:25,
                    height:25,
                    borderRadius:"100%",
                    backgroundColor:COLORS.gradientFour.color,
                    backgroundImage:COLORS.gradientFour.image
                }}></span>
                <span  onClick={()=>{
                  setTheme({
                    backgroundColor:COLORS.gradientFive.color,
                    backgroundImage:COLORS.gradientFive.image
                  })
                }}
                style={{
                    cursor:'pointer',
                    display:"inline-block",
                    width:25,
                    height:25,
                    borderRadius:"100%",
                    backgroundColor:COLORS.gradientFive.color,
                    backgroundImage:COLORS.gradientFive.image
                }}></span>
                 <span onClick={()=>{
                    setTheme({
                        backgroundColor:COLORS.gradientSix.color,
                        backgroundImage:COLORS.gradientSix.image
                    })
                 }}
                  style={{
                    cursor:'pointer',
                    display:"inline-block",
                    width:25,
                    height:25,
                    borderRadius:"100%",
                    backgroundColor:COLORS.gradientSix.color,
                    backgroundImage:COLORS.gradientSix.image
                }}></span>
                
            </div>
            </header>
          {/* FORM */}

          <div style={{marginTop:"100px"}}>
            <form className="py-4 px-3 bg-white rounded">
                <div className='d-flex gap-3'>
                <input value={noteInput} onChange={(e)=> {
                    setNoteInput(e.target.value)
                }} type="text" className='form-control' placeholder='Add note' />
                { 
                
                selectedNoteId? <button onClick={UpdateNote}className='btn btn-warning px-4'>Update</button> :
                <button onClick={AddNote}className='btn btn-success px-4'>Add</button> 
                }

                </div>
            </form>

             {/* CONTAINER */}
             <footer className='bg-white rounded mt-3 p-3' style={{minHeight:"300px"}}>
                {/*  */}
                <div className='d-flex justify-content-between border-bottom py-3 align-items-center'>
                    <div className='d-flex align-items-center gap-2'>
                    <span className='fw-bold fs-6'>Notes</span> 
                    <span style={{
                    display:"inline-block",
                    width:25,
                    height:25,
                    borderRadius:"100%",
                    backgroundColor:"#dfdfdf",
                    textAlign:'center'
                }}>3</span>
                    </div>
                    <button className=' btn btn-primary'>Clear All</button>
                </div>
                {/*  */}
                <div className='mt-3 d-flex flex-wrap gap-2'>
                    {
                        notes.map((note,index)=>{
                            return <div key={index}style={{ height:100, minWidth:300, backgroundColor:"#dfdfdf"}}
                             className= 'p-3 rounded border-5 border-start border-primary'>
                             <div className='d-flex justify-content-end'><MdModeEditOutline onClick={()=>{
                                setNoteInput(note.title)
                                // setIsUpdate(true)
                                setSelectedNoteId(note.id)
                             }} style={{cursor:"pointer"}}/></div>
                            <p className='fw-normal'>{note.title}</p> 
                            <span className='fw-light'style={{fontSize:12}}>10/24/2024</span>  
                                       
                         </div>
                        })
                    }
                    
                </div>
             </footer>
          </div>
        </div>
    </div>
  )
}
