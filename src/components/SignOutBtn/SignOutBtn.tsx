import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PagePaths, Titles } from '@/constants';
import { selectSignOut } from '@/store/auth/selectors';
import { useAuthStore } from '@/store/store';
import { BtnClickEvent } from '@/types/general.types';
import { makeBlur, toasts } from '@/utils';
import { Button } from './SignOutBtn.styled';

const SignOutBtn: FC = () => {
  const signOut = useAuthStore(selectSignOut);
  const navigate = useNavigate();

  const signOutProfile = () => {
    signOut()
      .then(() => {
        navigate(PagePaths.root);
      })
      .catch((error) => {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }
      });
  };

  const onSignOutBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    signOutProfile();
  };

  return (
    <Button type='button' onClick={onSignOutBtnClick}>
      {Titles.signOut}
    </Button>
  );
};

export default SignOutBtn;
