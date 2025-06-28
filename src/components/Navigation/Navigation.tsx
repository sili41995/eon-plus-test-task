import { FC } from 'react';
import { AnchorClickEvent } from '@/types/general.types';
import { makeBlur } from '@/utils';
import { IProps } from './Navigation.types';
import { Nav, List, ListItem, StyledNavLink } from './Navigation.styled';

const Navigation: FC<IProps> = ({ navLinks }) => {
  const onLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Nav>
      <List>
        {navLinks.map(({ href, title }) => (
          <ListItem key={href}>
            <StyledNavLink to={href} onClick={onLinkClick}>
              {title}
            </StyledNavLink>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

export default Navigation;
