import React, { memo, useState } from 'react';
import { areEqual } from 'Utils/equalityChecks';
import { Spinner } from 'Components/Spinner';
import { PurpleButton } from 'Components/Button/PurpleButton';
import { Table, TableBody, TableColumn, TableHeader, TableRow, Th } from 'Components/Table';
import { formatDate } from 'Utils/helpers';
import { Icon } from 'Components/Icons';
import { Modal } from 'Components/Modal';
import { Button } from 'Components/Button';
import classes from './contractForms.module.css';

interface Props {
  templates: any;
  totalTemplates: number;
  fetching: boolean;
  onClickFormTemplate: (e: any) => void;
  onClickDeleteButton: (e: any) => void;
}

const id = 1;

const ContractFormsContainer = ({
  templates,
  totalTemplates,
  fetching,
  onClickFormTemplate,
  onClickDeleteButton,
}: Props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletionIndex, setDeletionIndex] = useState<null | number>(null);

  const modalCloseClick = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div className={classes.contractFormsContent}>
      <div className={`d-flex justify-content-start align-items-center ${classes.contentHeader}`}>
        <h2>Form Templates</h2>
        <PurpleButton className={classes.addButton} onClick={onClickFormTemplate}>
          Add +
        </PurpleButton>
      </div>
      {fetching && <Spinner loading />}
      {totalTemplates ? '' : ''}
      {/* {templates && totalTemplates ? onClickDeleteButton("") : ""} */}
      <Table className={`table ${classes.templateListWrapper}`}>
        <TableHeader>
          <TableRow>
            <Th>Template Name</Th>
            <Th>Date Created</Th>
            <Th />
          </TableRow>
        </TableHeader>

        <TableBody>
          {templates.map((template, i) => (
            <TableRow key={template.template_name}>
              <TableColumn dataId={i} tdOnClick={onClickFormTemplate}>
                <p>{template.template_name}</p>
              </TableColumn>

              <TableColumn dataId={i} tdOnClick={onClickFormTemplate}>
                <p>{formatDate(template.date_created, 'PP')}</p>
              </TableColumn>

              <TableColumn dataId={i}>
                <Icon
                  type="trash"
                  onClick={() => {
                    setDeleteModalOpen(true);
                    setDeletionIndex(i);
                  }}
                />
              </TableColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        id={id && id.toString()}
        classes={classes}
        title="Delete Contract Form"
        isOpen={deleteModalOpen}
        modalHeader
        modalFooter
        footerButtons={
          <Button
            className={`${classes.delete}`}
            id={id && id.toString()}
            onClick={() => {
              onClickDeleteButton(deletionIndex);
              setDeleteModalOpen(false);
            }}
          >
            Delete
          </Button>
        }
        closeButtonText="Cancel"
        dataBsBackdrop="static"
        dataBsKeyboard="false"
        modalCloseClick={modalCloseClick}
      >
        <div className={classes.deleteModalCopy}>
          <p>Are you sure you want to delete this form?</p>
          {/* <div className="buttons">

        </div> */}
        </div>
      </Modal>
    </div>
  );
};

const ContractFormsContainerMemo = memo(ContractFormsContainer, areEqual);

export { ContractFormsContainerMemo as ContractFormsContainer };
