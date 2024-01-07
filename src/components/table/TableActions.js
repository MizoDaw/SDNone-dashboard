import React from "react";
import { Edit, Trash } from "react-feather";
import confirmAlert from "extensions/confirm-alert";
import { useTranslatedLabels } from "extensions/confirm-alert/useTranslatedLabels";
import { toast } from "react-toastify";
import { useTranslation } from "utility/language";
import {SiAdblock} from 'react-icons/si'
import AuthComponent from "components/AuthComponent";
import { useModal } from "test_layout/zustand";

const TableActions = ({ onDelete, onEdit,showEdit=true,showDelete=true, showBlock=false, ...props }) => {
  const t = useTranslation();
  const options = useTranslatedLabels();
  const  {setObjectToEdit , setIsOpenEditModel} = useModal()

  return (
    <AuthComponent>
      <div className="data-list-action" >
      
      {
        showEdit&&<Edit onClick={() => {

          const row  = onEdit()
          setIsOpenEditModel()
          setObjectToEdit(row)

        }
      } className="cursor-pointer m-1" size={20} />
      }  

      {
        showDelete
        &&
        <Trash
        onClick={() =>
          confirmAlert({
            onConfirm: () => {
              toast.info(t("_loading.delete"));
              onDelete();
            },
            ...options,
          })
        }
        className="cursor-pointer"
        size={20}
        />
      }
      
        
        {props.children}
      </div>
    </AuthComponent>
  );
};

export default TableActions;
