// src/components/common/Button/Button.tsx
'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import './Button.scss';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'disabled' | 'title'> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'title'> & {
    href: string;
    to?: undefined;
    target?: string;
    rel?: string;
  };

type ButtonAsRouterLink = CommonProps &
  Omit<LinkProps, 'className' | 'to'> & {
    to: string;
    href?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink;

function isInternalPath(path: string): boolean {
  if (!path) return false;
  if (path.startsWith('http://')) return false;
  if (path.startsWith('https://')) return false;
  if (path.startsWith('mailto:')) return false;
  if (path.startsWith('tel:')) return false;
  return path.startsWith('/');
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    block = false,
    disabled = false,
    loading = false,
    iconLeft,
    iconRight,
    className,
    title,
  } = props;

  const isDisabled = disabled || loading;

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    block ? 'btn--block' : '',
    isDisabled ? 'is-disabled' : '',
    loading ? 'is-loading' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading && <span className='btn__spinner' aria-hidden='true' />}
      {iconLeft && (
        <span className='btn__icon btn__icon--left' aria-hidden='true'>
          {iconLeft}
        </span>
      )}
      <span className='btn__label'>{children}</span>
      {iconRight && (
        <span className='btn__icon btn__icon--right' aria-hidden='true'>
          {iconRight}
        </span>
      )}
    </>
  );

  if ('to' in props && typeof props.to === 'string') {
    const { to, onClick, replace, state, reloadDocument, preventScrollReset } = props;

    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={isDisabled ? true : undefined}
        tabIndex={isDisabled ? -1 : undefined}
        title={title}
        replace={replace}
        state={state}
        reloadDocument={reloadDocument}
        preventScrollReset={preventScrollReset}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          if (onClick) onClick(e);
        }}>
        {content}
      </Link>
    );
  }

  if ('href' in props && typeof props.href === 'string') {
    const { href } = props;

    if (isInternalPath(href)) {
      const { onClick } = props as Omit<ButtonAsLink, 'href'> & { href: string };

      return (
        <Link
          to={href}
          className={classes}
          aria-disabled={isDisabled ? true : undefined}
          tabIndex={isDisabled ? -1 : undefined}
          title={title}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
              return;
            }
            if (onClick) onClick(e as unknown as React.MouseEvent<HTMLAnchorElement>);
          }}>
          {content}
        </Link>
      );
    }

    const linkProps = props as ButtonAsLink;
    const { onClick, target, rel, tabIndex, ...rest } = linkProps;

    return (
      <a
        {...rest}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-disabled={isDisabled ? true : undefined}
        tabIndex={isDisabled ? -1 : tabIndex}
        title={title}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          if (onClick) onClick(e);
        }}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const { type, onClick, ...rest } = buttonProps;

  return (
    <button
      {...rest}
      type={type ?? 'button'}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      title={title}
      onClick={(e) => {
        if (isDisabled) return;
        if (onClick) onClick(e);
      }}>
      {content}
    </button>
  );
};

export default Button;
