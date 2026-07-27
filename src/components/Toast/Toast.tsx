import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return (
    <div className={styles.toast}>
      {message}
    </div>
  );
};

export default Toast;