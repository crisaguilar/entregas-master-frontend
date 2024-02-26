import { TextFieldComponent } from 'common/components';
import { Formik, Form, FieldArray } from 'formik';
import * as React from 'react';
// import { Character } from '../character.vm';
import { Button } from '@mui/material';

// import * as ReactDOM from 'react-dom';

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
          Edit
        </Button>
      </Form>
    </Formik>
  );
};
