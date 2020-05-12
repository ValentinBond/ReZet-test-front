import React, { useState } from 'react';

import { orderProductsRequest } from '../../../actions/product';

import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import './shippingForm.css';

const ShippingForm = () => {
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();
    const { amountItem, cart } = useSelector(state => state.cart);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        country: '',
        city: '',
        address: '',
        shippingType: 1
    });

    const handleChangeForm = (event) => {
        const { name, value } = event.target;

        setFormData({
          ...formData,
          [name]: value
        });
      };

    const submit = () => {
        dispatch(orderProductsRequest({
            url: 'product/order',
            formData: {
                ...formData,
                order: cart.map(item => {
                    return {
                        id: item.id,
                        count: amountItem[item.id]
                    };
                })
            }
        }));
    };

    return (
        <form className="shipping_form" onSubmit={handleSubmit(submit)}>
        <label className="shipping_form__label">
            <span>First Name:</span>
            <input
              ref={register({
                    required: 'This field is required',
                    maxLength: {
                        value: 16,
                        message: 'The field must be short than 16 characters'
                    },
                    minLength: {
                        value: 2,
                        message: 'The field must be longer than 2 characters'
                    }
                })}
              onChange={handleChangeForm}
              className="shipping_form__input"
              type="text"
              name="fname"
            />
                <span className="shipping_form__error">
                    {errors.fname && errors.fname.message}
                </span>
        </label>

        <label className="shipping_form__label">
            <span>Last Name:</span>
            <input
              ref={register({
                    required: 'This field is required',
                    maxLength: {
                        value: 16,
                        message: 'The field must be short than 16 characters'
                    },
                    minLength: {
                        value: 2,
                        message: 'The field must be longer than 2 characters'
                    }
                })}
              onChange={handleChangeForm}
              className="shipping_form__input"
              type="text"
              name="lname"
            />
                <span className="shipping_form__error">
                    {errors.lname && errors.lname.message}
                </span>
        </label>
        <label className="shipping_form__label">
            <span>Country:</span>
            <input
              ref={register({
                    required: 'This field is required'
                })}
              onChange={handleChangeForm}
              className="shipping_form__input"
              type="text"
              name="country"
            />
                <span className="shipping_form__error">
                    {errors.country && errors.country.message}
                </span>
        </label>
        <label className="shipping_form__label">
            <span>City:</span>
            <input
              ref={register({
                    required: 'This field is required'
                })}
              onChange={handleChangeForm}
              className="shipping_form__input"
              type="text"
              name="city"
            />
                <span className="shipping_form__error">
                    {errors.city && errors.city.message}
                </span>
        </label>
        <label className="shipping_form__label">
            <span>Address:</span>
            <input
              ref={register({
                    required: 'This field is required'
                })}
              onChange={handleChangeForm}
              className="shipping_form__input"
              type="text"
              name="address"
            />
                <span className="shipping_form__error">
                    {errors.address && errors.address.message}
                </span>
        </label>
        <label className="shipping_form__label">
            <span>Type of Shipping:</span>
            <select  onChange={handleChangeForm} className="shipping_form__input" name="shippingType">
                <option value="1">Container Ships</option>
                <option value="2">Bulk Carrier</option>
                <option value="3">Tanker Ships</option>
                <option value="4">Special Purpose Ships</option>
            </select>
        </label>
        <input className="shipping_form__submit" type="submit" value="Submit" />
        </form>
    );
};

export default ShippingForm;