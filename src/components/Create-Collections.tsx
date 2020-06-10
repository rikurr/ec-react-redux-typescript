import React, { useEffect, useState, FormEvent, ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { Page, Form, Input, Button } from './common';
import { saveCollection } from '../db/firebase';
import { useDispatch } from 'react-redux';
import { createCollection } from '../features/collection/collectionSlice';

const CreateForm = styled(Form)`
  width: 90%;
`;

const Select = styled.select`
  width: 20%;
  margin-top: 20px;
  padding: 12px 16px;
  @media (max-width: 480px) {
    width: 50%;
  }
`;

type Product = {
  name: string;
  description: string;
  place: string;
};

const CreateCollection: FC = () => {
  const [gender, setGender] = useState<string>('men');
  const [category, setCategory] = useState<string>('T-shirt');
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    place: '',
  });
  const [image, setImage] = useState<any>();
  const dispatch = useDispatch();

  const { name, description, place } = product;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(createCollection(gender, name, description, category, place));
    console.log(image);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Page title='Create-Collection'>
      <CreateForm onSubmit={handleSubmit}>
        <Select
          value={gender}
          onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
            setGender(e.target.value)
          }
        >
          <option value='men'>メンズ</option>
          <option value='women'>レディース</option>
        </Select>
        <Input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          placeholder='商品名'
        />
        <Input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
          placeholder='商品説明'
        />
        <Select
          value={category}
          onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
            setCategory(e.target.value)
          }
        >
          <option value='T-shirt'>Tシャツ</option>
          <option value='pants'>パンツ</option>
          <option value='シューズ'>シューズ</option>
          <option value='ジャケット'>ジャケット</option>
        </Select>
        <Input
          type='numbar'
          name='place'
          placeholder='価格'
          value={place}
          onChange={handleChange}
        />
        <Input
          type='file'
          value={image}
          onChange={(e: any): void => setImage(e.target.files[0])}
        />
        <Button>新規作成</Button>
      </CreateForm>
    </Page>
  );
};

export default CreateCollection;
