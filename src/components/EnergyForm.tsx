import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  Paper,
  Collapse,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(2),
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
    margin: theme.spacing(2),
  },
  filter: {
    maxWidth: '50rem',
    padding: '1rem',
    minWidth: '700px',
  },
  filterButton: {
    margin: '1rem',
  },
  section: {
    padding: '2rem',
    marginBottom: '1rem',
  },
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
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { register, handleSubmit } = useForm<FormValues>({
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
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(!open)}
        className={classes.filterButton}
      >
        Toggle filter
      </Button>
      <form onSubmit={onSubmit} className={classes.form}>
        <Collapse in={open}>
          <Paper className={classes.filter}>
            <Paper elevation={3} className={classes.section}>
              <Typography variant="h5">Types</Typography>
              <div className={classes.formRow}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Energy Type
                  </InputLabel>
                  <Select {...register('energyTypes')} defaultValue="">
                    <MenuItem value={'grid'}>Grid</MenuItem>
                    <MenuItem value={'solar'}>Solar</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Heating Type
                  </InputLabel>
                  <Select {...register('heatingTypes')} defaultValue="">
                    <MenuItem value={'heating pump'}>Heating Pump</MenuItem>
                    <MenuItem value={'natural gas'}>Natural Gas</MenuItem>
                    <MenuItem value={'absorption'}>Absorption</MenuItem>
                    <MenuItem value={'electric'}>Electric</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Glazing Type
                  </InputLabel>
                  <Select {...register('glazingTypes')} defaultValue="">
                    <MenuItem value={'single'}>Single</MenuItem>
                    <MenuItem value={'double'}>Double</MenuItem>
                    <MenuItem value={'triple'}>Triple</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className={classes.formRow}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Vehicle Type
                  </InputLabel>
                  <Select {...register('vehicleTypes')} defaultValue="">
                    <MenuItem value={'electric'}>Electric</MenuItem>
                    <MenuItem value={'general'}>General</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Domicile Type
                  </InputLabel>
                  <Select {...register('domicileTypes')} defaultValue="">
                    <MenuItem value={'detached'}>Detached</MenuItem>
                    <MenuItem value={'semi detached'}>Semi detached</MenuItem>
                    <MenuItem value={'terraced'}>Terraced</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Paper>

            <Paper elevation={3} className={classes.section}>
              <Typography variant="h5">Usage</Typography>
              <div className={classes.formRow}>
                <FormControl className={classes.formControl}>
                  <TextField
                    {...register('occupants')}
                    label="Occupants"
                    helperText="Example: 1 - 100"
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    {...register('yearsBuilt')}
                    label="Years built"
                    helperText="Example: 1 - 2021"
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    {...register('numAppliances')}
                    label="Number of Appliances"
                    helperText="Example: 1 - 100"
                  />
                </FormControl>
              </div>
            </Paper>

            <Paper elevation={3} className={classes.section}>
              <Typography variant="h5">Energy</Typography>
              <div className={classes.formRow}>
                <FormControl className={classes.formControl}>
                  <TextField
                    {...register('temperatureWinter')}
                    label="Winter Temperate"
                    helperText="Example: -100 - 100"
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    {...register('temperatureSummer')}
                    label="Summer Temperature"
                    helperText="Example: 1 - 100"
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    {...register('energyUsage')}
                    label="Energy Usage"
                    helperText="Example: 1 - 100000"
                  />
                </FormControl>
              </div>
            </Paper>

            <button type="submit" className={classes.submitButton}>
              Submit
            </button>
          </Paper>
        </Collapse>
      </form>
    </div>
  );
};

export default EnergyForm;
