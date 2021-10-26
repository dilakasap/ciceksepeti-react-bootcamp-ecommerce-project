import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { getCategories } from "../../redux/actions/categories";
import { getBrands } from "../../redux/actions/brands";
import { getColors } from "../../redux/actions/colors";
import { getStatus } from "../../redux/actions/status";
import { useForm } from "react-hook-form";
import cloud from "../../images/cloud.svg";
import "./UploadProduct.scss";
import { useDropzone } from "react-dropzone";
import { resetUploadImage, uploadImage } from "../../redux/actions/uploadImage";
import {
  postCreateProduct,
  resetCreateProduct,
} from "../../redux/actions/createProduct";
import { REQUEST_STATUS } from "../../helpers/Constants";
import { useHistory } from "react-router";

const acceptedFileTypes = "image/jpg, image/jpeg,image/png";

function UploadProduct() {
  const history = useHistory();
  const [imageFile, setImageFile] = useState(null);
  const [formObject, setFormObject] = useState({
    price: "",
    imageUrl: "",
    title: "",
    status: {
      title: "",
      id: "",
    },
    color: {
      title: "",
      id: "",
    },
    brand: {
      title: "",
      id: "",
    },
    category: {
      title: "",
      id: "",
    },
    description: "",
    isOfferable: false,
  });
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);
  const colors = useSelector((state) => state.colors);
  const status = useSelector((state) => state.status);

  const onDrop = useCallback((acceptedFiles) => {
    setImageFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: acceptedFileTypes,
    maxSize: 400000,
  });

  useEffect(() => {
    if (imageFile === null) {
      return;
    }
    dispatch(uploadImage(imageFile));
  }, [imageFile]);

  const uploadedImage = useSelector((state) => state.uploadedImage);

  useEffect(() => {
    if (uploadedImage.status === REQUEST_STATUS.SUCCESS) {
      setFormObject({ ...formObject, imageUrl: uploadedImage.data.url });
      dispatch(resetUploadImage());
    }
  }, [uploadedImage]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
    dispatch(getColors());
    dispatch(getStatus());
  }, []);

  useEffect(() => {
    categories.data.map((item) => {
      if (formObject.category.title === item.title) {
        setFormObject({
          ...formObject,
          category: { ...formObject.category, id: item.id },
        });
      }
    });
  }, [formObject.category.title]);

  useEffect(() => {
    brands.data.map((item) => {
      if (formObject.brand.title === item.title) {
        setFormObject({
          ...formObject,
          brand: { ...formObject.brand, id: item.id },
        });
      }
    });
  }, [formObject.brand.title]);

  useEffect(() => {
    colors.data.map((item) => {
      if (formObject.color.title === item.title) {
        setFormObject({
          ...formObject,
          color: { ...formObject.color, id: item.id },
        });
      }
    });
  }, [formObject.color.title]);

  useEffect(() => {
    status.data.map((item) => {
      if (formObject.status.title === item.title) {
        setFormObject({
          ...formObject,
          status: { ...formObject.status, id: item.id },
        });
      }
    });
  }, [formObject.status.title]);

  const onSubmit = () => {
    dispatch(postCreateProduct({ formObject: formObject }));
  };

  const createProduct = useSelector((state) => state.createProduct);
  useEffect(() => {
    if (createProduct.status === REQUEST_STATUS.SUCCESS) {
      dispatch(resetCreateProduct());
      history.push(`/products/${createProduct.data.id}`);
    }
  }, [createProduct]);

  return (
    <div className="upload-product">
      <Header />
      <div className="upload-product-container">
        <div className="upload-product-wrapper">
          <p id="product-detail-p">Ürün Detayları</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="product-detail-form">
              <div className="left-side-form">
                <label htmlFor="urunadı">Ürün Adı</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Örnek: Iphone 12 Pro Max"
                  id={errors.productName && "upload-product-name-error"}
                  {...register("productName", {
                    required: true,
                    maxLength: 100,
                  })}
                  onChange={(e) => {
                    setFormObject({ ...formObject, title: e.target.value });
                  }}
                />
                <label htmlFor="acıklama">Açıklama</label>
                <textarea
                  className="input description-input"
                  placeholder="Ürün açıklaması girin"
                  id={
                    errors.productDescription &&
                    "upload-product-description-error"
                  }
                  {...register("productDescription", {
                    required: true,
                    maxLength: 500,
                  })}
                  onChange={(e) => {
                    if (e.target.value !== undefined)
                      setFormObject({
                        ...formObject,
                        description: e.target.value,
                      });
                  }}
                />
                {/* products selections from data */}
                <div className="select-box-first-line">
                  <div className="select-box-first-line-category">
                    <label htmlFor="kategori">Kategori</label>
                    <select
                      className={`input ${
                        errors.productCategory &&
                        "upload-product-category-error"
                      }`}
                      name="kategori"
                      {...register("productCategory", {
                        required: true,
                      })}
                      onChange={(e) => {
                        e.preventDefault();
                        if (e.target.value !== undefined)
                          setFormObject({
                            ...formObject,
                            category: {
                              ...formObject.category,
                              title: e.target.value,
                            },
                          });
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Kategori Seç
                      </option>
                      {categories.data.map((category) => (
                        <option value={category.title} key={category.id}>
                          {category.title.charAt(0).toUpperCase() +
                            category.title.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="select-box-first-line-brand">
                    <label htmlFor="marka">Marka</label>
                    <select
                      className={`input ${
                        errors.productBrand && "upload-product-brand-error"
                      }`}
                      name="marka"
                      {...register("productBrand", {
                        required: true,
                      })}
                      onChange={(e) => {
                        if (e.target.value !== undefined)
                          setFormObject({
                            ...formObject,
                            brand: {
                              ...formObject.brand,
                              title: e.target.value,
                            },
                          });
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Marka Seç
                      </option>
                      {brands.data.map((brand) => (
                        <option value={brand.title} key={brand.id}>
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
                    <select
                      className={`input ${
                        errors.productColor && "upload-product-color-error"
                      }`}
                      name="renk"
                      {...register("productColor", {
                        required: "select one option",
                      })}
                      onChange={(e) => {
                        if (e.target.value !== undefined)
                          setFormObject({
                            ...formObject,
                            color: {
                              ...formObject.color,
                              title: e.target.value,
                            },
                          });
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Renk Seç
                      </option>
                      {colors.data.map((color) => (
                        <option value={color.title} key={color.id}>
                          {color.title.charAt(0).toUpperCase() +
                            color.title.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="select-box-second-line-status">
                    <label htmlFor="kullanımdurumu">Kullanım Durumu</label>
                    <select
                      className={`input ${
                        errors.productStatus && "upload-product-status-error"
                      }`}
                      name="kullanımdurumu"
                      {...register("productStatus", {
                        required: "select one option",
                      })}
                      onChange={(e) => {
                        if (e.target.value !== undefined)
                          setFormObject({
                            ...formObject,
                            status: {
                              ...formObject.status,
                              title: e.target.value,
                            },
                          });
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Kullanım Durumu
                      </option>
                      {status.data.map((status) => (
                        <option value={status.title} key={status.id}>
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
                    id={errors.productName && "upload-product-name-error"}
                    {...register("productPrice", {
                      required: "true",
                    })}
                    className="input"
                    type="number"
                    placeholder="Bir fiyat girin"
                    onChange={(e) => {
                      setFormObject({ ...formObject, price: e.target.value });
                    }}
                  />
                  <span id="tl">TL</span>
                </div>
                {/* offer option */}
                <div className="offer-option-wrapper">
                  <span id="offer-option">Teklif opsiyonu </span>
                  <input
                    onChange={(e) => {
                      setFormObject({
                        ...formObject,
                        isOfferable: e.target.checked,
                      });
                    }}
                    type="checkbox"
                    class="toggle"
                  />
                  <label htmlFor=""></label>
                </div>
              </div>
              <div className="right-side-form">
                {/* upload image previev image  */}
                {!formObject.imageUrl && (
                  <div className="upload-image">
                    <p id="product-image-p">Ürün Görseli</p>
                    <div className="image-area" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <img src={cloud} alt="cloud" />
                      <p id="info-p">Sürükleyip bırakarak yükle</p>
                      <p>veya</p>
                      <button id="choose-image-button" onClick={open}>
                        Görsel Seçin
                      </button>
                      <p>PNG ve JPEG Dosya boyutu max. 100kb</p>
                    </div>
                  </div>
                )}
                {formObject.imageUrl && (
                  <div className="uploaded-image">
                    <p id="product-image-p">Ürün Görseli</p>
                    <img src={formObject.imageUrl} alt="uploadimage" />
                    <button
                      id="remove-uploaded-image-button"
                      onClick={() => {
                        setFormObject({ ...formObject, imageUrl: "" });
                      }}
                    >
                      x
                    </button>
                  </div>
                )}

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
