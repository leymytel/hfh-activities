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
import { FilterType } from '../interfaces/Filter';

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
    maxWidth: '1100px',
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

const EnergyForm: React.FC<{ updateFilter: (data: FilterType) => void }> = ({
  updateFilter,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { register, handleSubmit } = useForm<FilterType>({
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
      energyPerformanceCertificate: ''
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    updateFilter(data);
  });

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

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Energy Performance Certificate (EPC)
                  </InputLabel>
                  <Select {...register('energyPerformanceCertificate')} defaultValue="">
                    <MenuItem value={'a'}>A</MenuItem>
                    <MenuItem value={'b'}>B</MenuItem>
                    <MenuItem value={'c'}>C</MenuItem>
                    <MenuItem value={'d'}>D</MenuItem>
                    <MenuItem value={'e'}>E</MenuItem>
                    <MenuItem value={'f'}>F</MenuItem>
                    <MenuItem value={'g'}>G</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Paper>

            <Paper elevation={3} className={classes.section}>
              <Typography variant="h5">Usage</Typography>
              <div className={classes.formRow}>
                <FormControl className={classes.formControl}>
                  <TextField
                    inputProps={register('occupants')}
                    label="Occupants"
                    helperText="Example: 1 - 100"
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    inputProps={register('yearsBuilt')}
                    label="Years built"
                    helperText="Example: 1 - 2021"
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    inputProps={register('numAppliances')}
                    label="Number of Appliances"
                    helperText="Example: 1 - 100"
                  />
                </FormControl>
              </div>

              <div className={classes.formRow}>
                <FormControl className={classes.formControl}>
                  <TextField
                    inputProps={register('temperatureWinter')}
                    label="Winter Temperature"
                    helperText="Example: -100 - 100"
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    inputProps={register('temperatureSummer')}
                    label="Summer Temperature"
                    helperText="Example: 1 - 100"
                  />
                </FormControl>

                <FormControl className={classes.formControl}>
                  <TextField
                    inputProps={register('energyUsage')}
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
