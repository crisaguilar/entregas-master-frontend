import React from 'react';
import * as classes from '../character.styles';
import { Formik, Form, FieldArray, Field } from 'formik';
import { ButtonGroup, Button } from '@mui/material';
import { CharacterFormData } from '../character.vm';

interface Props {
  bestSentences: string[];
  onSave: (value: CharacterFormData) => void;
}

export const CharacterFormComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { bestSentences, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={{ bestSentences }}
      enableReinitialize={true}
    >
      {({ values }) => (
        <Form>
          <FieldArray
            name="bestSentences"
            render={(arrayHelpers) => (
              <div>
                {values.bestSentences && values.bestSentences.length > 0 ? (
                  values.bestSentences.map((sentence, index) => (
                    <div key={index}>
                      <Field
                        helperText="Write a sentence."
                        variant="standard"
                        name={`bestSentences.${index}`}
                      />
                      <ButtonGroup
                        variant="outlined"
                        aria-label="Basic button group"
                      >
                        <Button
                          variant="outlined"
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </Button>
                        <Button
                          variant="outlined"
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                  ))
                ) : (
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    onClick={() => arrayHelpers.push('')}
                  >
                    Add
                  </Button>
                )}

                <Button
                  className={classes.saveButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};
