import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(2),
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  submitButton: {
    color: 'white',
    backgroundColor: '#145b5b',
    padding: '10px 16px',
    textDecoration: 'none',
    borderRadius: '6px',
    border: 'none',
    margin: theme.spacing(2)
  }
}));

type FormValues = {
  energyTypes: string;
  heatingTypes: string;
  glazingTypes: string;
  vehicleTypes: string;
  domicileTypes: string;
  occupants: string;
  yearsBuilt: string;
  numAppliances: string;
  temperatureWinter: string;
  temperatureSummer: string;
  floorsNumber: string;
  energyUsage: string;
};

const EnergyForm: React.FC = () => {
  const classes = useStyles();

  const {register, handleSubmit} = useForm<FormValues>({
    defaultValues: {
      energyTypes: '',
      heatingTypes: '',
      glazingTypes: '',
      vehicleTypes: '',
      domicileTypes: '',
      occupants: '',
      yearsBuilt: '',
      numAppliances: '',
      temperatureWinter: '',
      temperatureSummer: '',
      floorsNumber: '',
      energyUsage: '',
    }
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.formRow}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Energy Type</InputLabel>
          <Select {...register("energyTypes")}>
            <MenuItem value={'grid'}>Grid</MenuItem>
            <MenuItem value={'solar'}>Solar</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Heating Type</InputLabel>
          <Select {...register("heatingTypes")}>
            <MenuItem value={'heating pump'}>Heating Pump</MenuItem>
            <MenuItem value={'natural gas'}>Natural Gas</MenuItem>
            <MenuItem value={'absorption'}>Absorption</MenuItem>
            <MenuItem value={'electric'}>Electric</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Glazing Type</InputLabel>
          <Select {...register("glazingTypes")}>
            <MenuItem value={'single'}>Single</MenuItem>
            <MenuItem value={'double'}>Double</MenuItem>
            <MenuItem value={'triple'}>Triple</MenuItem>
          </Select>
        </FormControl>
      </div>


      <div className={classes.formRow}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Vehicle Type</InputLabel>
          <Select {...register("vehicleTypes")}>
            <MenuItem value={'electric'}>Electric</MenuItem>
            <MenuItem value={'general'}>General</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Domicile Type</InputLabel>
          <Select {...register("domicileTypes")}>
            <MenuItem value={'detached'}>Detached</MenuItem>
            <MenuItem value={'semi detached'}>Semi detached</MenuItem>
            <MenuItem value={'terraced'}>Terraced</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            {...register("occupants")}
            label="Occupants"
            helperText="Example: 1 - 100"
          />
        </FormControl>
      </div>

      <div className={classes.formRow}>
        <FormControl className={classes.formControl}>
          <TextField
            {...register("yearsBuilt")}
            label="Years built"
            helperText="Example: 1 - 2021"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            {...register("numAppliances")}
            label="Number of Appliances"
            helperText="Example: 1 - 100"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            {...register("temperatureWinter")}
            label="Winter Temperate"
            helperText="Example: -100 - 100"
          />
        </FormControl>
      </div>

      <div className={classes.formRow}>
        <FormControl className={classes.formControl}>
          <TextField
            {...register("temperatureSummer")}
            label="Summer Temperature"
            helperText="Example: 1 - 100"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            {...register("energyUsage")}
            label="Energy Usage"
            helperText="Example: 1 - 100000"
          />
        </FormControl>
      </div>
      <button type="submit" className={classes.submitButton}>Submit</button>
    </form>
  )
}

export default EnergyForm;
