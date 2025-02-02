<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:55',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                Password::min(8)
                    ->letters()
                    ->symbols(),
            ],
        
            'company_name' => 'string|max:255',
            'phone' => 'numeric',
            'street' => 'string|max:255',
            'city' => 'string|max:255',
            'postal_code' => 'required|numeric',
            'country' => 'string|max:255',
            'poste' => 'string',
            'role' => 'boolean',

        
        ];
        
        }
}
