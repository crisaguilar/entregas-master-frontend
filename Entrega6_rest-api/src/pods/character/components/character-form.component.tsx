import React from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
import { Button } from '@mui/material';
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
                      <Field name={`bestSentences.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')}
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add
                  </button>
                )}
              </div>
            )}
          />

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
