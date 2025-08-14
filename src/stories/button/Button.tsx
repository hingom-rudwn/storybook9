import React from 'react';
import classNames from 'clsx';
import { ButtonStyle } from './ButtonStyle';
import s from './button.module.scss';

export type ButtonProps = {
  /** 자주빛 배경, 검은 배경, 회식배경, 라인타입1, 라인타입2, 라인없이 배경만, 텍스트 밑줄 */
  theme?: 'primary' | 'secondary' | 'tertiary' | 'line1' | 'line2' | 'noline' | 'text';
  /** 순서대로 높이가 24, 36, 44, 48, 56 */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  $radius?: 'default' | 'bordered';
  children?: React.ReactNode;
  full?: boolean;
  $loading?: boolean;
  className?: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  theme = 'primary',
  size = 'medium',
  $radius = 'default',
  children,
  full,
  $loading,
  className,
  onClick,
  ...attr
}: ButtonProps) => {
  return (
    <ButtonStyle
      theme={theme}
      size={size}
      full={full}
      onClick={onClick}
      $radius={$radius}
      $loading={$loading}
      className={classNames(s.button, className)}
      {...attr}
    >
      {$loading ? <div>
        <div className={s.circle_border}>
          <div className={s.circle_core}></div>
        </div>
      </div>
        : children}
    </ButtonStyle>
  );
};