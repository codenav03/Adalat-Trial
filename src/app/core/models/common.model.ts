export interface Icasel
{
  key?: string;
  Case_no: string;
  title: string;
  assign:string;
  comp: string;
  pmail:string;
  dmail:string;
  description: string;
  lcourtId:string;
}

export interface UserData {
  key?: string;
  email: string;
  role: string;
  username: string;
}

export interface assginList{
  lcourtId: string;
  caseId: string;
}