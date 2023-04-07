<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('formticket', function (Blueprint $table) {
            $table->string('name');
            $table->string('email');
            $table->string('subject');
            $table->text('description');
            $table->string('file_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('formticket', function (Blueprint $table) {
            //
        });
    }
};
