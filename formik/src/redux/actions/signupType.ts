export interface Signup {
  image: string | null | Blob | MediaSource;
  name: string;
  email: string;
  phoneNo: string | number;
  password: string;
  confirmPassword: string;
  isLoggedin: boolean;
}

export interface SignUpAction {
  type: string;
  user: Signup;
}

export type Action = SignUpAction;

export interface Auth {
  component: React.FC;
}
