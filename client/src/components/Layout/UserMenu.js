import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
<div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>

        </div>
      </div>
  )
}

export default UserMenu