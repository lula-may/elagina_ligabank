import flatpickr from 'flatpickr';
import { DIGITS_NUMBER } from './const';

export const getCurrentRate = (rate, saleCurrency, perchaseCurrency) => parseFloat(rate[`${saleCurrency}${perchaseCurrency}`]);

export const convertSaleSum = (saleSum, currentRate) => (saleSum) ? parseFloat((saleSum * currentRate).toFixed(DIGITS_NUMBER)) : '';

export const convertPerchaseSum = (perchaseSum, currentRate) => (perchaseSum) ? parseFloat((perchaseSum / currentRate).toFixed(DIGITS_NUMBER)) : '';

export const extend = (a, b) => Object.assign({}, a, b);

export const generateId = () => Math.round(new Date() * Math.random());

export const formatDate = (date) => flatpickr.formatDate(date, 'Y-m-d');

export const isToday = (date) => (date.getDate() === new Date().getDate());
