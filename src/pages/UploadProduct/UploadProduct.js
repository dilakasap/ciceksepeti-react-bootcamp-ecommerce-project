import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { getCategories } from "../../redux/actions/categories";
import { getBrands } from "../../redux/actions/brands";
import { getColors } from "../../redux/actions/colors";
import { getStatus } from "../../redux/actions/status";
import cloud from "../../images/cloud.svg";
import "./UploadProduct.scss";

function UploadProduct() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
    dispatch(getColors());
    dispatch(getStatus());
  }, []);
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);
  const colors = useSelector((state) => state.colors);
  const status = useSelector((state) => state.status);
  return (
    <div className="upload-product">
      <Header />
      <div className="upload-product-container">
        <div className="upload-product-wrapper">
          <p id="product-detail-p">Ürün Detayları</p>
          <form>
            <div className="product-detail-form">
              <div className="left-side-form">
                <label htmlFor="urunadı">Ürün Adı</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Örnek: Iphone 12 Pro Max"
                />
                <label htmlFor="acıklama">Açıklama</label>
                <input
                  id="description-input"
                  type="text"
                  className="input"
                  placeholder="Ürün açıklaması girin"
                />
                <div className="select-box-first-line">
                  <div className="select-box-first-line-category">
                    <label htmlFor="kategori">Kategori</label>
                    <select className="input" name="kategori">
                      <option value="" disabled selected hidden>
                        Kategori Seç
                      </option>
                      {categories.data.map((category) => (
                        <option value="" key={category.id}>
                          {category.title.charAt(0).toUpperCase() +
                            category.title.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="select-box-first-line-brand">
                    <label htmlFor="marka">Marka</label>
                    <select className="input" name="marka">
                      <option value="" disabled selected hidden>
                        Marka Seç
                      </option>
                      {brands.data.map((brand) => (
                        <option value="" key={brand.id}>
                          {brand.title.charAt(0).toUpperCase() +
                            brand.title.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="select-box-second-line">
                  <div className="select-box-second-line-color">
                    <label htmlFor="renk">Renk</label>
                    <select className="input" name="renk">
                      <option value="" disabled selected hidden>
                        Renk Seç
                      </option>
                      {colors.data.map((color) => (
                        <option value="" key={color.id}>
                          {color.title.charAt(0).toUpperCase() +
                            color.title.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="select-box-second-line-status">
                    <label htmlFor="kullanımdurumu">Kullanım Durumu</label>
                    <select
                      id="status-select"
                      className="input"
                      name="kullanımdurumu"
                    >
                      <option value="" disabled selected hidden>
                        Kullanım Durumu
                      </option>
                      {status.data.map((status) => (
                        <option value="" key={status.id}>
                          {status.title.charAt(0).toUpperCase() +
                            status.title.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div id="product-detail-form-price-input">
                  <label htmlFor="fiyat">Fiyat</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Bir fiyat girin"
                  />
                  <span id="tl">TL</span>
                </div>
                <div className="offer-option-wrapper">
                  <span id="offer-option">Teklif opsiyonu</span>
                  <input type="checkbox" id="switch" />
                  <label htmlFor="" id="label-offer"></label>
                </div>
              </div>
              <div className="right-side-form">
                <div className="upload-image">
                  <p id="product-image-p">Ürün Görseli</p>
                  <div className="image-area">
                    <img src={cloud} alt="cloud" />
                    <p id="info-p">Sürükleyip bırakarak yükle</p>
                    <p>veya</p>
                    <button id="choose-image-button">Görsel Seçin</button>
                    <p>PNG ve JPEG Dosya boyutu max. 100kb</p>
                  </div>
                </div>
                <div className="submit-button">
                  <button id="upload-submit-button" className="button">
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadProduct;
