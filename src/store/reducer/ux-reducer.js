import ModalConstant from '../../constant/modal'

export function busyModal (busyModalState={ open:false }, action) {
  switch(action.type) {
    case ModalConstant.OPEN_BUSY_MODAL:
      busyModalState = { 
        ...action.payload,
        open: true
      };
      break;
    case ModalConstant.CLOSE_BUSY_MODAL:
      busyModalState = { 
        ...action.payload,
        open: false
      };
      break;
    default:
  }
  
  return busyModalState;
};

export function decisionModal (decisionModalState={ open:false }, action) {
  switch(action.type) {
    case ModalConstant.OPEN_DECISION_MODAL:
      decisionModalState = { 
        ...action.payload,
        open: true
      };
      break;
    case ModalConstant.CLOSE_DECISION_MODAL:
      decisionModalState = { 
        open: false
      };
      break;
    default:
  }
  
  return decisionModalState;
};

export function videoModal (videoModalState={ open:false }, action) {
  switch(action.type) {
    case ModalConstant.OPEN_VIDEO_MODAL:
      videoModalState = { 
        ...action.payload,
        open: true
      };
      break;
    case ModalConstant.CLOSE_VIDEO_MODAL:
      videoModalState = { 
        open: false
      };
      break;
    default:
  }
  
  return videoModalState;
};