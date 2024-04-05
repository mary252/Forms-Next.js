import "../styles.scss"
import clsx from 'clsx';
export default function ResponsiveBar({
  pathname,
}: {
  pathname: string
}) {

  return (
    <div className="p-5 sm-bg w-screen h-44 flex items-center justify-center">
      <div
        className={clsx(
          'circle mx-2',
          {
            'bg-white': pathname === `/home/userInfo`,
            '': pathname !== `/home/userInfo`,
          },
        )}
      >
        <p
          className={clsx(
            'state-number ',
            {
              'text-dark': pathname === `/home/userInfo`,
              'text-white': pathname !== `/home/userInfo`,
            },
          )}
        >1</p>
      </div>
      <div
        className={clsx(
          'circle mx-2',
          {
            'bg-white': pathname === "/home/plan",
            '': pathname !== "/home/plan",
          },
        )}
      >
        <p
          className={clsx(
            'state-number ',
            {
              'text-dark': pathname === "/home/plan",
              'text-white': pathname !== "/home/plan",
            },
          )}
        >2</p>
      </div>

      <div
        className={clsx(
          'circle mx-2',
          {
            'bg-white': pathname === `/home/addons`,
            '': pathname !== `/home/addons`,
          },
        )}
      >
        <p
          className={clsx(
            'state-number ',
            {
              'text-dark': pathname === `/home/addons`,
              'text-white': pathname !== `/home/addons`,
            },
          )}
        >3</p>
      </div>

      <div
        className={clsx(
          'circle mx-2',
          {
            'bg-white': pathname === `/home/checkout`,
            '': pathname !== `/home/checkout`,
          },
        )}
      >
        <p
          className={clsx(
            'state-number ',
            {
              'text-dark': pathname === `/home/checkout`,
              'text-white': pathname !== `/home/checkout`,
            },
          )}
        >4</p>
      </div>
    </div>
  )
}