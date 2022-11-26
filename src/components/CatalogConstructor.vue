<template>
  <div
      v-if="$route.params.catalogItem === 'constructor' && $store.state.display_width >= 768"
      class="catalog-constructor"
  >
    <goods-item :good="construct[6]" />
    <div class="const-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog1.webp', loading: 'data:image/gif;base64,R0lGODlhEgPeA4AAAP///wAAACH5BAEAAAEALAAAAAASA94DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKLGFa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOcECgAADs='}"
           alt="banner"
      >
    </div>
    <goods-item :good="construct[0]" />
    <div class="const-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog2.webp', loading: 'data:image/gif;base64,R0lGODlhEgPeA4AAAP///wAAACH5BAEAAAEALAAAAAASA94DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKLGFa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOcECgAADs='}"
          alt="banner"
      >
    </div>
    <goods-item :good="construct[17]" />
    <div class="const-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog3.webp', loading: 'data:image/gif;base64,R0lGODlhEgPeA4AAAP///wAAACH5BAEAAAEALAAAAAASA94DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKLGFa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOcECgAADs='}"
          alt="banner"
      >
    </div>
  </div>
  <div
      v-if="$route.params.catalogItem === 'constructor' && $store.state.display_width < 768"
      class="catalog-constructor"
  >
    <goods-item :good="construct[6]" />
    <div class="const-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog1.webp', loading: 'data:image/gif;base64,R0lGODlhEgPeA4AAAP///wAAACH5BAEAAAEALAAAAAASA94DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKLGFa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOcECgAADs='}"
          alt="banner"
      >
    </div>
    <div class="const-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog2.webp', loading: 'data:image/gif;base64,R0lGODlhEgPeA4AAAP///wAAACH5BAEAAAEALAAAAAASA94DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKLGFa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOcECgAADs='}"
          alt="banner"
      >
    </div>
    <goods-item :good="construct[0]" />
    <goods-item :good="construct[17]" />
    <div class="const-banner">
      <img
          v-lazy="{src: 'https://u1600792.isp.regruhosting.ru/img_server/const_catalog/const_catalog3.webp', loading: 'data:image/gif;base64,R0lGODlhEgPeA4AAAP///wAAACH5BAEAAAEALAAAAAASA94DAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz++/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruyGOPPv4IZJBCDklkkUYeiWSSSi7JZJNOPglllFJOSWWVVl6JZZZabslll15+CWaYYo5JZplmnolmmmquyWabbr4JZ5xyzklnnXbeiWeeeu7JZ59+/glooIIOSmihhh6KaKKKLspoo44+Cmmkkk5KaaWWXopppppuymmnnn4Kaqiijkpqqaaeimqqqq7KaquuvgprrLLOSmuttt6Ka6667sprr77+Cmywwg5LbLHGHov+bLLKLstss84+C2200k5LbbXWXottttpuy2233n4Lbrjijktuueaei2666q7LbrvuvgtvvPLOS2+99t6Lb7767stvv/7+C3DAAg9McMEGH4xwwgovzHDDDj8MccQST0xxxRZfjHHGGm/McccefwxyyCKPTHLJJp+Mcsoqr8xyyy6/DHPMMs9Mc80234xzzjrvzHPPPv8MdNBCD0100UYfjXTSSi/NdNNOPw111FJPTXXVVl+NddZab811115/DXbYYo9Ndtlmn4122mqvzXbbbr8Nd9xyz0133XbfjXfeeu/Nd99+/w144IIPTnjhhh+OeOKKL854444/Dnnkkk/+Tnnlll+Oeeaab855555/Dnrooo9Oeummn4566qqvznrrrr8Oe+yyz0577bbfjnvuuu/Oe+++/w588MIPT3zxxh+PfPLKL898884/D3300k9PffXWX4999tpvz3333n8Pfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+Pf/76789///7/D8AACnCABCygAQ+IwAQqcIEMbKADHwjBCEpwghSsoAUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IwxzqcIc87KEPfwjEIApxiEQsohGPiMQkKnGJTGyiE58IxShKcYpUrKLGFa+IxSxqcYtc7KIXvwjGMIpxjGQsoxnPiMY0qnGNbGyjG98IxzjKcY50rKMd74jHPOpxj3zsox//CMhACnKQhCykIQ+JyEQqcpGMbKQjHwnJSEpykpSspCUviclManKTnOykJz8JylCKcpSkLKUpT4nKVKpylaxspStfCctYynKWtKylLW+Jy1zqcpe87KUvfwnMYApzmMQspjGPicxkKnOZzGymM58JzWhKc5rUrKY1r4nNbGpzm9zspje/Cc5winOcECgAADs='}"
          alt="banner"
      >
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem";
export default {
  name: 'CatalogConstructor',
  components: {
    GoodsItem
  },
  computed: {
    construct() {
      return [...this.$store.state.goods].filter(elem => {
        return elem.category_ids[0] === 4;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.catalog-constructor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: rem(30);
  margin-top: rem(100);
}
.const-banner {
  padding-bottom: rem(34);
  display: flex;
}

@media (max-width: em(1440, 16)) and (min-width: em(1024, 16)) {
  .catalog-constructor {
    row-gap: calc(1.0625rem + (30 - 17) * ((100vw - 64rem) / (1440 - 1024)));
  }
}
@media (max-width: em(1023, 16)) and (min-width: em(428, 16)) {
  .catalog-constructor {
    row-gap: calc(0rem + (17 - 0) * ((100vw - 26.75rem) / (1023 - 428)));
    margin-top: calc(3.75rem + (100 - 60) * ((100vw - 26.75rem) / (1023 - 428)));
  }
}
@media (max-width: em(767, 16)) {
  .catalog-constructor {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: em(427, 16)) {
  .catalog-constructor {
    row-gap: 0;
    margin-top: calc(2rem + (60 - 32) * ((100vw - 12.5rem) / (427 - 200)));
  }
}
</style>
