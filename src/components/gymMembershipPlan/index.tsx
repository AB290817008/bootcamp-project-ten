import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import {savedValues} from '../../App'
 import Radio from '@material-ui/core/Radio';
 import RadioGroup from '@material-ui/core/RadioGroup';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


 interface props{

    savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>],

    handleNext: () => void,
    handleBack: () => void
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "20vh",
    margin: "0 auto",
    padding: "9vh",
    borderStyle: "solid",
    borderColor: "black",

  },
  innerWrapper:{
    margin: "0 auto",
   
  },


  buttonsWrapper: {

    display: "flex",
    flexDirection: "row",
    marginRight: "2vh",
    marginLeft: "2vh"
  },
  
  buttons: {
    backgroundColor: "black",
    width: "10vh",
    fontSize: "2vh",
    color: "white",
    margin:"0 auto",
    marginTop: "3vh",

    '&:hover': {
      backgroundColor: "black"
    },
    
  },

 
  }),
);


 const PackageSelection:React.FC<props> = ({savedValues, handleNext, handleBack}) => {
    const classes = useStyles();

   return (
     <Formik
       initialValues={{package: savedValues[0].package }}
       validationSchema={Yup.object({
        package: Yup.string().required("A radio option is required"),

         
       })}
       onSubmit={(values) => {

        console.log(values.package)
        switch (values.package) {
           
            case "Gold":
               savedValues[1]({...savedValues[0], package:values.package, amount: 100})
               break
            case "Platinium":
              savedValues[1]({...savedValues[0],package:values.package, amount: 150})
              break
            case "Diamond":
              savedValues[1]({...savedValues[0], package:values.package, amount: 300})
              break
            
            default:
              savedValues[1]({...savedValues[0], package:"", amount: 0})
          }

        handleNext()

       }}
     >

        {formik => ( 
    
       <Form className = {classes.wrapper} >

      
<FormControl className = {classes.innerWrapper} component="fieldset">
        
         <Field name="package" as={RadioGroup} >
         <Field name ="package" as={FormControlLabel} value="Gold" control={<Radio />} label="Gold - $100" />
         <Field name ="package" as={FormControlLabel} value="Platinium" control={<Radio />} label="Platinium - $150" />
         <Field name ="package" as={FormControlLabel} value="Diamond" control={<Radio />} label="Diamond - $300" />
         
         </Field>
         <FormHelperText><ErrorMessage name="package" /></FormHelperText>
         
         </FormControl>
         <div className = {classes.buttonsWrapper}>
         <button  className = {classes.buttons}  type = "button" onClick = {handleBack} >Back</button>

         <button className = {classes.buttons} type="submit" >Next</button>
         </div>
       </Form>
 )}
     </Formik>
   );
 };

 export default PackageSelection;
