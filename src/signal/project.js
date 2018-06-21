import ProjectConstants from "../constant/project"

export function select(name) {
  return { type: ProjectConstants.SELECT, payload: name }
}





