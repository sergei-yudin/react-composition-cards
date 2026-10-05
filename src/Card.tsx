import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  image?: string;
  imageAlt?: string;
};

export function Card({ children, image, imageAlt = '' }: CardProps) {
  return <article className="card">
    {image && <img className="card-image" src={image} alt={imageAlt} />}
    <div className="card-body">{children}</div>
  </article>;
}
