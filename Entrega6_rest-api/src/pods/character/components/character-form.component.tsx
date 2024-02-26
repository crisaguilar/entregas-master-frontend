import { TextFieldComponent } from 'common/components';
import { Formik, Form, FieldArray } from 'formik';
import * as React from 'react';
import { Button } from '@mui/material';


interface Props {
  bestSentences: string;
  onSave: (value: { bestSentences: string }) => void;
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
      <Form>
        <TextFieldComponent
          name="bestSentences"
          label="Best Sentences"
          multiline={true}
          rows={1}
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Form>
    </Formik>
  );
};
