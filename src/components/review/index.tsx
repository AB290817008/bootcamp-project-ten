import React from 'react';
 import {savedValues} from '../../App'
 import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


 interface props{

    savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>],
    handleBack: () => void
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "40vh",
    margin: "0 auto",
    padding: "4vh",
    borderStyle: "solid",
    borderColor: "grey"
  
  },
  headings:{
      textDecoration: "underline"
  },

  infoFields: {
      display:"flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      
  },
  fieldTitles:{
      width:"12vh",
      fontWeight: "bold"
  },

  fieldInfo:{
      width:"25vh",
      overflow: "auto",
      textAlign: "left"
  },
  button: {
    backgroundColor: "black",
    width: "10vh",
    fontSize: "2vh",
    color: "white",
    margin:"0 auto",
    marginTop: "3vh",

    '&:hover': {
      backgroundColor: "darkGrey"
    },
    
  },
  buttonsWrapper: {

    display: "flex",
    flexDirection: "row",
    marginRight: "2vh",
    marginLeft: "2vh"
  },
  

 
  }),
);


 const Review:React.FC<props> = ({savedValues, handleBack}) => {
    const classes = useStyles();

console.log(savedValues[0])

   return (
    <div className = {classes.wrapper}>
    <h2 className= {classes.headings}>Personal Information</h2>
    <p className = {classes.infoFields} ><span className = {classes.fieldTitles} >Name: </span> <span className = {classes.fieldInfo}>{savedValues[0].firstName} {savedValues[0].lastName}</span></p>
    <p className = {classes.infoFields} ><span  className = {classes.fieldTitles} >Email: </span> <span className = {classes.fieldInfo} >{savedValues[0].email}</span></p>
    <p className = {classes.infoFields} ><span  className = {classes.fieldTitles} >Phone: </span> <span className = {classes.fieldInfo} >{savedValues[0].phone}</span></p>
    <p className = {classes.infoFields} ><span  className = {classes.fieldTitles} >City: </span> <span className = {classes.fieldInfo} >{savedValues[0].city}</span></p>
    <p className = {classes.infoFields} ><span  className = {classes.fieldTitles} >Area: </span> <span className = {classes.fieldInfo} >{savedValues[0].area}</span></p>

    <h2 className= {classes.headings}>Plan Details</h2>
    <p className = {classes.infoFields} ><span  className = {classes.fieldTitles} >Package: </span> <span className = {classes.fieldInfo} >{savedValues[0].package}</span></p>
    <p className = {classes.infoFields}><span  className = {classes.fieldTitles} > Amount: </span> <span className = {classes.fieldInfo} >${savedValues[0].amount}</span></p>
    <div className = {classes.buttonsWrapper}>

   <button className = {classes.button} onClick = {handleBack}>Back</button>
   <button className = {classes.button} onClick = {()=>{alert("Thank you for submitting the form")}}>Submit</button>

</div>
   </div>
   )
 };

 export default Review;