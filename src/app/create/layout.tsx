interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <form>{props.children}</form>;
}
