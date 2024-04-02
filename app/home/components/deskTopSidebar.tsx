import "../styles.scss"
import clsx from 'clsx';
export default function DesktopSidebar({
  pathname,
}: {
  pathname: string
}) {

  return (
    <div className="columns-4xl grid-cols-2 invisible md:visible sm:invisible mx-3 p-5 my-3 lg-bg ">
      <div className="flex my-3 ">
        <div
          className={clsx(
            'circle',
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
        <div className="mx-3">
          <p className="text-slate-200">Step 1</p>
          <p className="text-white font-bold">Your Info</p>
        </div>
      </div>

      <div className="flex my-3">
        <div className={clsx(
          'circle',
          {
            'bg-white': pathname === "",
            '': pathname !== "",
          },
        )}>
          <p className={clsx(
            'state-number ',
            {
              'text-dark': pathname === "",
              'text-white': pathname !== "",
            },
          )}>2</p>
        </div>
        <div className="mx-3">
          <p className="text-slate-200">Step 2</p>
          <p className="text-white font-bold">Select Plan</p>
        </div>
      </div>
      <div className="flex my-3">
        <div className={clsx(
          'circle',
          {
            'bg-white': pathname === "",
            '': pathname !== "",
          },
        )}>
          <p className={clsx(
            'state-number ',
            {
              'text-dark': pathname === "",
              'text-white': pathname !== "",
            },
          )}>3</p>
        </div>
        <div className="mx-3">
          <p className="text-slate-200">3</p>
          <p className="text-white font-bold">Add-ons</p>
        </div>
      </div>

      <div className="flex my-3">
        <div className={clsx(
          'circle',
          {
            'bg-white': pathname === "",
            '': pathname !== "",
          },
        )}>
          <p className={clsx(
            'state-number ',
            {
              'text-dark': pathname === "",
              'text-white': pathname !== "",
            },
          )}>4</p>
        </div>
        <div className="mx-3">
          <p className="text-slate-200">Step 4</p>
          <p className="text-white font-bold">Summary</p>
        </div>
      </div>
    </div>
  )
}