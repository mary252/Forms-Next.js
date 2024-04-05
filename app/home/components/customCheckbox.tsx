import "../styles.scss"
import clsx from 'clsx';
import { TiTick } from "react-icons/ti";

export default function CustomCheckbox({
  checked,
}: {
  checked: boolean
}) {

  return (
    <div
      className={clsx(
        ' custom-checkbox cursur-pointer mt-2 ',
        {
          'checkbox-filled': checked,
          '': !checked,
        },
      )}
      >
        {checked && <TiTick size={30} fill="#fff" />}
    </div>
  )
}