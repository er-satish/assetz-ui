import React, { Component } from 'react';

export function formatMoney(money) {
    return new Intl.NumberFormat('en-IN').format(money);
}