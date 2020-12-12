import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import {savedValues} from '../../App'
 import TextField from '@material-ui/core/TextField';
 import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


interface props{

    savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>],

    handleNext: () => void,
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
  fields: {
    marginBottom:"2vh"
    
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

 
  }),
);


 const PersonalInfo:React.FC<props> = ({savedValues, handleNext}) => {
    const classes = useStyles();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

   return (
     <Formik
       initialValues={{ firstName: savedValues[0].firstName, lastName: savedValues[0].lastName, email: savedValues[0].email ,phone: savedValues[0].phone, city: savedValues[0].city, area: savedValues[0].area}}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string()
           .email('Invalid email address')
           .required('Required'),
           phone: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .min(6,'Must be 6 characters or more')
           .required('Required')
           .matches(phoneRegExp, 'Phone number is not valid'),
          city: Yup.string()
          .required('Required'),
          area: Yup.string()
          .required('Required'),
         
       })}
       onSubmit={(values) => {
        savedValues[1]({...savedValues[0],firstName: values.firstName, lastName: values.lastName, phone:values.phone, email: values.email, city: values.city, area:values.area})
        handleNext()
       }}
     >

        {formik => { console.log(formik.errors.lastName)
          return( 
       
       <Form className = {classes.wrapper} autoComplete="off">
         
         <Field  error = {formik.errors.firstName && formik.touched.firstName}  className = {classes.fields}  name="firstName" as= {TextField} label = "First Name"  helperText={<ErrorMessage name="firstName"/>}/>
         <Field error = {formik.errors.lastName  && formik.touched.lastName}  className = {classes.fields} name="lastName" as= {TextField} label = "Last Name"  helperText={<ErrorMessage name="lastName"/>}/>
         <Field error = {formik.errors.email  && formik.touched.email}  className = {classes.fields} name="email" as= {TextField} label = "Email"  helperText={<ErrorMessage name="email"/>}/>
         <Field error = {formik.errors.phone && formik.touched.phone} className = {classes.fields} name="phone" as= {TextField} type = "number" label = "Phone"  helperText={<ErrorMessage name="phone"/>}/>
         <Field error = {formik.errors.city && formik.touched.city}  className = {classes.fields} name="city"  as= {TextField} label = "City"  helperText={<ErrorMessage name="city"/>}/>
         <Field error = {formik.errors.area && formik.touched.area} className = {classes.fields}  name="area"  as= {TextField} label = "Area"  helperText={<ErrorMessage name="area"/>}/>


         <button className =  {classes.button} type="submit" >Next</button>
       </Form>
 )}}
     </Formik>
   );
 };

 export default PersonalInfo;