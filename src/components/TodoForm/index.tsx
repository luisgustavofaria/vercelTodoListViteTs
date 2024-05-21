import {
  ContainerForm,
  ContainerFormTextArea,
  ContainerFormTitle,
} from './styles';

import favorited from '../../assets/favorited.svg';
import nofavorited from '../../assets/nofavorited.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface TodoFormProps {
  onAddToDo: (
    title: string,
    description: string,
    toggleFavorite: boolean
  ) => void;
}

interface TodoFormData {
  title: string;
  description: string;
}

const todoSchema = z.object({
  title: z.string().min(1, 'Informe um titulo').max(50),
  description: z.string().min(1, 'Informe uma descrição').max(200),
});

export function TodoForm({ onAddToDo }: TodoFormProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  function onSubmitForm(data: TodoFormData) {
    onAddToDo(data.title, data.description, isFavorited);
    console.log(data);
    reset();
    setIsFavorited(false);
  }

  function changeFavorited() {
    setIsFavorited((oldstate) => !oldstate);
  }

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitForm)}>
      <ContainerFormTitle>
        <input type="text" placeholder="Título" {...register('title')} />
        <img
          onClick={changeFavorited}
          src={isFavorited ? favorited : nofavorited}
          alt=""
        />
      </ContainerFormTitle>
      {errors.title && (
        <strong style={{ color: '#ff0000' }}>{errors.title.message}</strong>
      )}
      <ContainerFormTextArea>
        <input
          type="text"
          placeholder="Criar Nota..."
          {...register('description')}
        />
      </ContainerFormTextArea>
      {errors.description && (
        <strong style={{ color: '#ff0000' }}>
          {errors.description.message}
        </strong>
      )}
      <button type="submit"></button>
      {/* button serve somente para funcionar o onSubmit */}
    </ContainerForm>
  );
}
