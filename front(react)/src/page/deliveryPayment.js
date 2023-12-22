import React from 'react';
import Layout from '../component/layout/layout';
import style from '../page/deliveryPayment.module.css';

function DeliveryPayment() {
  return (
    <>
    <Layout>
    <div className={style.paymentContainer}>
      <h2 className={style.paymentTitle}>Оплата та Доставка</h2>
      <p className={style.paymentText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed ac massa eu erat fermentum consequat. Vestibulum tristique, odio id
        tristique pellentesque, orci ex eleifend ex, nec lacinia libero neque
        non eros. Aliquam erat volutpat. Maecenas ac bibendum purus. Integer
        fringilla justo at libero vehicula, eu ultrices eros posuere. Duis non
        tortor ut leo hendrerit bibendum. Phasellus ut rhoncus quam. Fusce
        tristique a elit in finibus. Phasellus euismod purus id risus fringilla,
        sit amet rhoncus urna elementum. Fusce vestibulum quam non quam
        fringilla, vel fermentum metus venenatis. Nulla facilisi. Suspendisse
        convallis odio ut magna consequat, eget tincidunt quam luctus. Cras id
        sapien eget arcu iaculis bibendum. Cras sit amet justo lectus. In hac
        habitasse platea dictumst. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas.
      </p>
      <p className={style.paymentText}>
        Vestibulum auctor tellus metus, eget cursus leo hendrerit in. Nulla
        facilisi. Praesent posuere lectus a augue pellentesque, vel bibendum
        augue pharetra. Suspendisse et ex nec neque dignissim ultricies. Fusce
        pharetra risus vitae enim elementum, eget malesuada velit sollicitudin.
        Vestibulum vel semper libero. Vivamus euismod sed urna a elementum.
        Integer ut sapien mi. Vestibulum tincidunt justo sit amet metus iaculis,
        eget aliquet nisl tristique.
      </p>
      <p className={style.paymentText}>
        Donec ac nisl eu massa interdum malesuada. Quisque nec odio in elit
        sollicitudin rhoncus nec ut dolor. Nullam sollicitudin, justo eu porta
        malesuada, quam purus feugiat elit, nec posuere quam velit et nunc.
        Vivamus non neque nec dui euismod dignissim. Curabitur in volutpat orci.
        Vestibulum in nisi nec velit semper interdum sit amet a dolor. Donec in
        neque eu turpis venenatis vehicula a quis odio. Aliquam ut est et lorem
        tincidunt luctus.
      </p>
      <p className={style.paymentText}>
        Donec ac nisl eu massa interdum malesuada. Quisque nec odio in elit
        sollicitudin rhoncus nec ut dolor. Nullam sollicitudin, justo eu porta
        malesuada, quam purus feugiat elit, nec posuere quam velit et nunc.
        Vivamus non neque nec dui euismod dignissim. Curabitur in volutpat orci.
        Vestibulum in nisi nec velit semper interdum sit amet a dolor. Donec in
        neque eu turpis venenatis vehicula a quis odio. Aliquam ut est et lorem
        tincidunt luctus.
      </p>
    </div>
    </Layout>
    </>
  );
}

export default DeliveryPayment;
