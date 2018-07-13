import ModalConstants from "../../constant/modal"
import { dispatch } from '../../store/store';
export default function openVideoModal (shot) {
  dispatch({ type: ModalConstants.OPEN_VIDEO_MODAL, payload:
    {
      reject: () => {
        console.log('reject');
        dispatch({ type: ModalConstants.CLOSE_VIDEO_MODAL });
      },
      shot
    }
     });
}

