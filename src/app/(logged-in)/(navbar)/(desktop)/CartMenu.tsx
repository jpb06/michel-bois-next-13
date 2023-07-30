import { CartIcon } from '~/components/generic/icons';

export const CartMenu = async () => (
  <div className="dropdown-end dropdown px-2">
    <label tabIndex={0} className="btn btn-circle btn-ghost">
      <div className="indicator">
        <CartIcon />
        <span className="badge indicator-item badge-sm bg-red-600">8</span>
      </div>
    </label>
    <div
      tabIndex={0}
      className="card dropdown-content card-compact mt-3 w-52 bg-base-300 shadow"
    >
      <div className="card-body">
        <span className="text-lg font-bold">8 Items</span>
        <span className="text-info">Subtotal: $999</span>
        <div className="card-actions">
          <button className="btn btn-primary btn-block">View cart</button>
        </div>
      </div>
    </div>
  </div>
);
